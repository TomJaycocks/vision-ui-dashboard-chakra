
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://gmrhlogdgjmlphtjxduk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdtcmhsb2dkZ2ptbHBodGp4ZHVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0MzY2NTYsImV4cCI6MjAyOTAxMjY1Nn0.-FgBaGmU2oVSeBJKAq2g3vmY7-_ertXO5Yp8XZbszBA");