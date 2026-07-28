export default function Contact() {
    return (
        <section className="mx-auto w-full max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8">
            <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                Contact
            </h3>

            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg">
                Feel free to reach out for collaborations or just a friendly
                hello 👋
            </p>

            <a
                href="mailto:support@dayro.co"
                className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-8 sm:py-3 sm:text-base"
            >
                Say Hello
            </a>
        </section>
    );
}