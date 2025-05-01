
export const checkUser = async (req, res) => {
  const { email } = req.body;
  const { db } = require("./prisma");
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (user) {
      return res.status(200).json({ message: "User exists" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error checking user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}