CREATE TABLE public.demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL, hotel_name text NOT NULL, email text NOT NULL, phone text NOT NULL,
  location text NOT NULL, rooms integer NOT NULL, current_system text,
  features text[] NOT NULL DEFAULT '{}', preferred_date date, consent boolean NOT NULL,
  status text NOT NULL DEFAULT 'new', created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL, email text NOT NULL, phone text, subject text NOT NULL, message text NOT NULL,
  status text NOT NULL DEFAULT 'new', created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.demo_requests TO anon, authenticated;
GRANT INSERT ON public.contact_messages TO anon, authenticated;
GRANT ALL ON public.demo_requests TO service_role;
GRANT ALL ON public.contact_messages TO service_role;
ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a demo request" ON public.demo_requests FOR INSERT TO anon, authenticated
  WITH CHECK (consent = true AND status = 'new' AND char_length(name) BETWEEN 2 AND 100 AND char_length(email) <= 255 AND rooms BETWEEN 1 AND 500);
CREATE POLICY "Anyone can send a contact message" ON public.contact_messages FOR INSERT TO anon, authenticated
  WITH CHECK (status = 'new' AND char_length(message) BETWEEN 5 AND 2000 AND char_length(email) <= 255);
CREATE INDEX demo_requests_created_idx ON public.demo_requests (created_at DESC);