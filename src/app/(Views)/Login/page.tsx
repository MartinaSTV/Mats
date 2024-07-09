import dbClient from "@/db/mongodb";

const Login = () => {
  // server action

  const login = async (formData: FormData) => {
    "use server";
    const userName = formData.get("name") as string;
    const password = formData.get("password") as string;
  };

  return (
    <section>
      <form action="">
        <h2>Logga in som Admin</h2>
        <div className="flex flex-col">
          <label htmlFor="name">Användar Namn</label>
          <input type="text" id="name" name="name" className="border" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Lösenord</label>
          <input type="text" id="password" name="password" className="border" />
        </div>
        <div>
          <button type="submit">Glömt lösenord</button>
        </div>
        <button>Logga in</button>
      </form>
    </section>
  );
};
export default Login;
