-- Run this in the Supabase SQL Editor to remove every saved connected route.
-- This does not delete pins. Route reports and confirmations are deleted automatically.

delete from public.community_routes;
