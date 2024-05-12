"use client";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegCircleCheck } from "react-icons/fa6";
export default function FeedbackSection() {
	const [submitted, setSubmitted] = useState(false);
	const submitFeedback = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		// console.log(formData.get("email"));
		// console.log(formData.get("feedback"));
		setSubmitted(true);
	};
	return (
		<div>
			{!submitted ? (
				<div className="px-5">
					<h1 className="text-2xl font-bold md:text-3xl text-center my-4 ">
						Help Us Improve
					</h1>
					<p className="text-center my-4">
						Get in touch and let us know if there&apos;s a feature
						you&apos;d like to see or if there&apos;s something that
						doesn&apos;t look quite right.
					</p>
					<form
						onSubmit={submitFeedback}
						className="w-10/12 max-w-[800px] shadow-lg flex flex-col gap-y-5 mx-auto py-5 px-5 rounded-md"
					>
						<input
							name="email"
							className="border-2 rounded outline-none p-2 focus:border-blue-400 transition-all duration-300"
							type="email"
							placeholder="Email"
							required
						/>
						<textarea
							name="feedback"
							className="border-2 rounded resize-none p-2 outline-none h-40 focus:border-blue-400 transition-all duration-300"
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
			) : (
				<div className="flex flex-col items-center justify-center h-96 gap-y-5">
					<FaRegCircleCheck className="text-green-600" size={100} />
					<h1 className="text-2xl font-medium text-center ">
						Thank you!
					</h1>
					<p className="font-medium">
						Your feedback has been submitted.
					</p>
					<div className="flex justify-center gap-x-5 w-full">
						<Link
							href="/"
							className="flex items-center gap-x-2 font-medium border-2 border-transparent transition duration-200 hover:border-blue-600 px-4 py-1 rounded-full"
						>
							<FaArrowLeft />
							Back to Home
						</Link>
						<button
							className="flex items-center gap-x-2 font-medium border-2 border-transparent transition duration-200 hover:border-blue-600 px-4 py-1 rounded-full"
							onClick={() => {
								setSubmitted(false);
							}}
						>
							More Feedback
							<FaArrowRight />
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
