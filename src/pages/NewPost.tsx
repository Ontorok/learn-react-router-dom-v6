import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../util/api";
import { ErrorTypePorps } from "./ErrorPage";

function NewPostPage() {
  const actionData = useActionData() as ErrorTypePorps;
  const navigate = useNavigate();
  const navigation = useNavigation();

  function cancelHandler() {
    navigate("/blog");
  }

  return (
    <>
      {actionData && actionData.status && <p>{actionData.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
      />
    </>
  );
}

export default NewPostPage;

export async function action({ request }: any) {
  const formData = await request.formData();
  const post = {
    title: formData.get("title"),
    body: formData.get("post-text"),
  };
  try {
    await savePost(post);
  } catch (err: any) {
    if (err.status === 422) {
      // tbd
      return err;
    }
    throw err;
  }

  return redirect("/blog");
}
