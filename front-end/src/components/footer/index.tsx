import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import useFooterBgColorStore from "../../store/footer/bg";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import PopupComponent from "../popup/response";

type FormData = {
  email: string;
};

function Footer() {
  const boxRef = useRef<HTMLHeadingElement | null>(null);
  const [hovered, setHovered] = useState<boolean>(false);
  const [focused, setFocused] = useState<boolean>(false);
  const [statusOk, setStatusOk] = useState<string | null>(null);

  const { setFooterBgColor } = useFooterBgColorStore((state) => state);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.timeline({
        scrollTrigger: {
          trigger: ".footer_txt ",
          start: "top 90%",
          end: "bottom 200px",
          toggleActions: "restart pause complete reverse",
          onUpdate: ({ isActive }) => {
            setFooterBgColor(isActive);
          },
        },
      });
      //   headingTitle.to(".heading_title ", { yPercent: 100, opacity: 1 });
    }, boxRef);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Send Email */
  const { register, handleSubmit, reset } = useForm<FormData>();

  const submitHandler = handleSubmit((data) => {
    emailjs
      .send(
        "service_ua9l19i",
        "template_xqwapev",
        { email: data.email, subject: "Subscription" },
        "aHefCKRxgW_roS3Li"
      )
      .then(
        function () {
          setStatusOk("S U C C E S S !");
          reset();
        },
        function (error) {
          setStatusOk("FAILED. Please try again.");
          console.log(error);
        }
      );
  });

  return (
    <section
      ref={boxRef}
      className={`${
        hovered || focused ? "bg-white" : "bg-black"
      } w-full min-h-[375px] duration-500 pb-40 flex justify-center items-center flex-col gap-5`}
    >
      <h2
        className={`${
          hovered || focused ? "text-black" : "text-white "
        } duration-500 text-5xl footer_txt`}
      >
        Let's Do This
      </h2>
      <Link
        to={"#"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${
          hovered || focused ? "text-black" : "text-white "
        } duration-500`}
      >
        Start a partnership today ⇨
      </Link>
      <span
        className={`${
          hovered || focused ? "text-black" : "text-white "
        } duration-500 `}
      >
        or
      </span>
      <form onSubmit={submitHandler} className="w-[80%] max-w-[500px]">
        <input
          type="email"
          placeholder="Subscribe now!"
          className={`${
            hovered || focused ? "bg-black" : "bg-white "
          } duration-500  outline-none w-full p-3 rounded-lg text-white`}
          onFocus={() => setFocused(true)}
          {...register("email", {
            onBlur: () => setFocused(false),
          })}
        />
      </form>
      {statusOk && (
        <PopupComponent title={statusOk} close={() => setStatusOk(null)} />
      )}

      {/* Partnership */}
    </section>
  );
}

export default Footer;
