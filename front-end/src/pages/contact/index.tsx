import { useForm } from "react-hook-form";
import Input from "./components/Input";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

type FormData = {
  email: string;
  name: string;
  subject: string;
  content: string;
};
const Contact = () => {
  const [t] = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // 	This is going to handle and send the email to contact us.
  const submitHandler = handleSubmit((data) => {
    emailjs
      .send("service_ua9l19i", "template_xqwapev", data, "aHefCKRxgW_roS3Li")
      .then(
        function () {
          // setStatusOk("S U C C E S S !");
          reset();
        },
        function (error) {
          // setStatusBad("FAILED. Please try again.");
          console.log(error);
        }
      );
  });
  return (
    <section className="flex flex-col w-screen items-center my-10 gap-y-12">
      <h1 className="text-5xl">{t("global.contact.header")}</h1>
      <form
        noValidate
        onSubmit={submitHandler}
        className="flex flex-col gap-y-8 min-w-[300px]"
      >
        <Input
          label={t("global.contact.fields.labels.name")}
          placeholder={t("global.contact.fields.placeholders.name")}
          register={register("name", {
            required: t("global.contact.fields.errors.name"),
          })}
          error={errors.name}
        />
        <Input
          label={t("global.contact.fields.labels.email")}
          placeholder={"john@example.com"}
          register={register("email", {
            required: t("global.contact.fields.errors.email.required"),
            pattern: {
              value:
                // eslint-disable-next-line no-control-regex
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
              message: t("global.contact.fields.errors.email.validation"),
            },
          })}
          error={errors.email}
        />

        <Input
          label={t("global.contact.fields.labels.subject")}
          placeholder={t("global.contact.fields.placeholders.subject")}
          register={register("subject", {
            required: t("global.contact.fields.errors.subject"),
          })}
          error={errors.subject}
        />
        <div className="flex flex-col gap-y-2">
          <div className="relative w-full">
            <textarea
              className="p-[10px] w-full h-[200px] border-2 border-t-0 border-b-0 border-[#0B2447] bg-transparent outline-none shadow-[7px_7px_0px_0px_#0B2447] resize-none transition-all duration-500 focus:shadow-none peer focus:placeholder-transparent"
              {...register("content", {
                required: t("global.contact.fields.errors.content"),
              })}
              placeholder={t("global.contact.fields.placeholders.content")}
            />
            <label
              className="absolute top-[10px] left-[10px] text-[#0B2447] z-[1] scale-0 peer-focus:scale-100 transition-all peer-focus:-top-[10px] peer-focus:duration-500 peer-focus:transition-all duration-500"
              htmlFor="input"
            >
              {t("global.contact.fields.labels.content")}
            </label>
            <div className="absolute content-[''] bg-[#0B2447] w-[0%] h-[2px] right-0 top-0 peer-focus:w-[35%] peer-focus:transition-all peer-focus:duration-500"></div>
            <div className="absolute content-[''] bg-[#0B2447] w-[0%] h-[2px] right-0 bottom-0 peer-focus:w-full peer-focus:transition-all peer-focus:duration-500"></div>
          </div>
          <small className="text-red-900 text-sm">
            {errors.content?.message}
          </small>
        </div>

        <button className="bg-black text-white py-4 text-xl font-bold rounded-xl">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
