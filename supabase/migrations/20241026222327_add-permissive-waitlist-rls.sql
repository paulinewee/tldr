create policy "Enable read access for all users"
on "public"."waitlist"
to public
using (
  true
);

create policy "Enable insert access for all users"
on "public"."waitlist"
as PERMISSIVE
for INSERT
to public
with check (true);


