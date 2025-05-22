import "module-alias/register";
import env from "@config/env";
import app from "./app";
import db from "@config/db";

const PORT = env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await db();
});
