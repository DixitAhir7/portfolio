export default function Contact() {
    return (
        <section>
            <h3 className="text-2xl font-bold mb-6">Contact</h3>
            <p className="text-gray-700 mb-4">
                Feel free to reach out for collaborations or just a friendly hello 👋
            </p>
            <a
                href="mailto:youremail@example.com"
                className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
                Say Hello
            </a>
        </section>
    );
};