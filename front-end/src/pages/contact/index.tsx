import { useForm } from "react-hook-form";
import Input from "./components/Input";
type FormData = {
	name: string;
	lastName: string;
	email: string;
	content: string;
};

const Contact = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	// 	This is going to handle and send the email to contact us.
	const submitHandler = handleSubmit((_data) => {
		console.log("Submission");
	});
	return (
		<section className="flex flex-col w-screen items-center my-10 gap-y-12">
			<h1 className="text-5xl">Contact Us</h1>
			<form
				noValidate
				onSubmit={submitHandler}
				className="flex flex-col gap-y-8 min-w-[300px]"
			>
				<Input
					label="Enter Your Name"
					placeholder="John"
					register={register("name", {
						required: "Name is required",
					})}
					error={errors.name}
				/>
				<Input
					label="Enter Your last name"
					placeholder="Doe"
					register={register("lastName", { required: "Last name is required" })}
					error={errors.lastName}
				/>
				<Input
					label="Enter Your Email"
					placeholder="john@example.com"
					register={register("email", {
						required: "Email is required",
						pattern: {
							value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
							message: "Invalid Email",
						},
					})}
					error={errors.email}
				/>
				<div className="flex flex-col gap-y-2">
					<div className="relative w-full">
						<textarea
							className="p-[10px] w-full h-[200px] border-2 border-t-0 border-b-0 border-[#0B2447] bg-transparent outline-none shadow-[7px_7px_0px_0px_#0B2447] resize-none transition-all duration-500 focus:shadow-none peer focus:placeholder-transparent"
							{...register("content", { required: "Content can't be empty" })}
							placeholder="content"
						/>
						<label
							className="absolute top-[10px] left-[10px] text-[#0B2447] z-[1] scale-0 peer-focus:scale-100 transition-all peer-focus:-top-[10px] peer-focus:duration-500 peer-focus:transition-all duration-500"
							htmlFor="input"
						>
							Enter Your Content
						</label>
						<div className="absolute content-[''] bg-[#0B2447] w-[0%] h-[2px] right-0 top-0 peer-focus:w-[35%] peer-focus:transition-all peer-focus:duration-500"></div>
						<div className="absolute content-[''] bg-[#0B2447] w-[0%] h-[2px] right-0 bottom-0 peer-focus:w-full peer-focus:transition-all peer-focus:duration-500"></div>
					</div>
					<small className="text-red-900 text-sm">{errors.content?.message}</small>
				</div>

				<button className="bg-black text-white py-4 text-xl font-bold rounded-xl">
					Send
				</button>
			</form>
		</section>
	);
};

export default Contact;
