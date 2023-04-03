import { createClient } from '@supabase/supabase-js'

const URL = "https://zbbvkmoqlbrkxayvbogm.supabase.co";

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiYnZrbW9xbGJya3hheXZib2dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA1NDQxNjYsImV4cCI6MTk5NjEyMDE2Nn0._GuAZ4JaAFeKZokai2NnDegiPuaTSxVOglUC3so6JSg';

export const supabase = createClient(URL, API_KEY);