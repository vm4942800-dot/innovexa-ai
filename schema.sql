-- AI Innovate Lab: Supabase PostgreSQL Database Schema
-- Provides role-based access for Students, Teachers, and Administrators

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  role TEXT CHECK (role IN ('student', 'teacher', 'admin')) DEFAULT 'student',
  school TEXT DEFAULT 'Greenwood International STEM Academy',
  grade TEXT,
  roll_no TEXT,
  designation TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Teams Table
CREATE TABLE IF NOT EXISTS public.teams (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT UNIQUE NOT NULL,
  domain TEXT NOT NULL,
  leader_id UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Team Members Join Table
CREATE TABLE IF NOT EXISTS public.team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  team_id UUID REFERENCES public.teams(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'Collaborator',
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(team_id, user_id)
);

-- 4. Capstone Projects Table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  domain TEXT NOT NULL,
  team_id UUID REFERENCES public.teams(id) ON DELETE SET NULL,
  current_stage INT DEFAULT 3 CHECK (current_stage BETWEEN 1 AND 6),
  status TEXT DEFAULT 'submitted' CHECK (status IN ('submitted', 'under_review', 'approved', 'revision_requested', 'in_development', 'completed')),
  approval_status TEXT DEFAULT 'Under Review',
  problem_identification TEXT NOT NULL,
  problem_description TEXT,
  proposed_solution TEXT NOT NULL,
  expected_impact TEXT NOT NULL,
  target_audience TEXT,
  selected_technologies TEXT[] DEFAULT '{}',
  selected_ai_tools TEXT[] DEFAULT '{}',
  mentor_id UUID REFERENCES public.profiles(id),
  mentor_feedback TEXT,
  jury_score NUMERIC(5, 2),
  report_url TEXT,
  ppt_url TEXT,
  github_url TEXT,
  prototype_url TEXT,
  demo_video_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Project Tasks Table (Kanban)
CREATE TABLE IF NOT EXISTS public.project_tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  status TEXT DEFAULT 'todo' CHECK (status IN ('todo', 'in_progress', 'done')),
  assignee_id UUID REFERENCES public.profiles(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security (RLS) Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_tasks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public profiles are readable by everyone"
ON public.profiles FOR SELECT USING (true);

CREATE POLICY "Projects are readable by all authenticated members"
ON public.projects FOR SELECT USING (true);
