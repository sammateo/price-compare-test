import React from "react";

export default function FeedbackSection() {
	return (
		<div className="px-5">
			<h1 className="text-2xl font-bold md:text-3xl text-center my-4 ">
				Help Us Improve
			</h1>
			<p className="text-center my-4">
				Get in touch and let us know if there's a feature you'd like to
				see or if there's something that doesn't look quite right.
			</p>
			<form className="w-10/12 max-w-[800px] shadow-lg flex flex-col gap-y-5 mx-auto py-5 px-4">
				<input
					className="border-2 rounded outline-none p-2 focus:border-blue-400 transition-all duration-300"
					type="email"
					placeholder="Email"
					required
				/>
				<textarea
					className="border-2 rounded resize-none p-2 outline-none h-40 focus:border-blue-400 transition-all duration-300"
					name=""
					id=""
					placeholder="Tell us how we can improve"
					required
				></textarea>
				<button
					type="submit"
					className="block w-fit mx-auto rounded bg-blue-600 px-4 py-2 text-sm text-white text-center font-medium transition  hover:scale-105 mt-4"
				>
					Send Message
				</button>
			</form>
		</div>
	);
}
