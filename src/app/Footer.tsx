// import Link from "next/link";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" fixed bottom-0 left-0 w-full bg-amber-600 text-white py-6 px-8">
     <div className="  max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
         <div className="flex flex-col items-center sm:items-start mb-4 sm:mb-0 ">
        <span className="font-semibold">
          Contact No:{" "}
          <a href="tel:+919462547938" className="underline">
            +91 9462547938 
          </a>
        </span>
        <span className=" text-sm font-semibold mt-2">
            Lakshit Jain
        </span>
        {/* <span className="text-sm mt-2 ">
          Jain Events 
        </span> */}
      </div>
      <Link href="https://github.com/Gjain6203?tab=repositories"  target="_blank">
        <p className="text-white cursor-pointer">Created By: Gaurav Jain</p>
      </Link>
      <div className="flex flex-col items-center sm:items-end">
        <span className="mb-2 font-semibold">Follow Us</span>
        <div className="flex gap-4">
          {/* <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 fill-white hover:fill-blue-500"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.405 24 24 23.408 24 22.674V1.326C24 .592 23.405 0 22.675 0" />
            </svg>
          </Link> */}
          {/* <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <svg
              className="w-6 h-6 fill-white hover:fill-blue-400"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482C7.691 8.094 4.066 6.13 1.64 3.161c-.543.938-.855 2.021-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.418A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.936 9.936 0 0024 4.557z" />
            </svg>
          </Link> */}
          <Link
            href="https://www.instagram.com/jain.events4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg
              className="w-6 h-6 fill-white hover:fill-green-700"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.396 3.635 1.363c-.967.967-1.232 2.14-1.291 3.417C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.277.324 2.45 1.291 3.417.967.967 2.14 1.232 3.417 1.291C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.059 2.45-.324 3.417-1.291.967-.967 1.232-2.14 1.291-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.277-.324-2.45-1.291-3.417-.967-.967-2.14-1.232-3.417-1.291C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
          </Link>
        </div>
      </div>
     </div>
     
    </footer>
  );
}
