export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">
                    Copyright &copy; {new Date().getFullYear()} Base64 Tool. All rights reserved.
                </p>
                <p className="text-xs mt-2 text-gray-400">
                    Created by{' '}
                    <a
                        href="https://www.damianczerwinski.pl/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        Damian Czerwiński
                    </a>
                </p>
            </div>
        </footer>
    );
}
