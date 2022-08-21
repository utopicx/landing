interface Props {
  nickName: string;
  email: string;
  comment: string;
}

const sendForm = async (props: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: props,
    }),
  });
  return await res.json();
};

const commentService = {
  sendForm,
};

export default commentService;
