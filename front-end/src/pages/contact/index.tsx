const Contact = () => {
	return (
		<section className="flex flex-col w-screen items-center my-10 gap-y-10">
			<h1 className="text-5xl">Contact Us</h1>
			<form action="" className="flex flex-col gap-y-4 min-w-[250px]">
				<div className="relative w-full">
					<input
						className="p-[10px] w-full h-[40px] border-2 border-t-0 border-b-0 border-[#0B2447] bg-transparent outline-none shadow-[7px_7px_0px_0px_#0B2447] transition-all duration-500 focus:shadow-none peer focus:placeholder-transparent"
						name="firstname"
						type="text"
						placeholder="example@mail.com"
					/>
					<label
						className="absolute top-[10px] left-[10px] text-[#0B2447] z-[1] scale-0 peer-focus:scale-100 transition-all peer-focus:-top-[10px] peer-focus:duration-500 peer-focus:transition-all duration-500"
						htmlFor="input"
					>
						Enter Your firstname
					</label>
					<div className="absolute content-[''] bg-[#0B2447] w-[0%] h-[2px] right-0 top-0 peer-focus:w-[35%] peer-focus:transition-all peer-focus:duration-500"></div>
					<div className="absolute content-[''] bg-[#0B2447] w-[0%] h-[2px] right-0 bottom-0 peer-focus:w-full peer-focus:transition-all peer-focus:duration-500"></div>
				</div>
			</form>
		</section>
	);
};

export default Contact;
