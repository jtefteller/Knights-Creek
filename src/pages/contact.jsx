import Head from "next/head";
import { Header } from "@/components/Header";
import Banner from "@/components/Banner";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Link from "next/link";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first_name: event.target.first.value,
      last_name: event.target.last.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
    if (!data.first || !data.last || !data.email || !data.message) {
      return;
    }
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/messages";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    router.push("/thank-you");
  };
  return (
    <>
      <Head>
        <title>Knight&apos;s Creek – Outdoor Lifestyle</title>
        <meta name="description" content="Knight's Creek – Contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/knightscreeklogo.png" />
      </Head>
      <main>
        <Header />
        <Banner
          title={"Contact Us"}
          url={"bg-[url('../images/guygroup.jpg')]"}
        />
        <Grid title={"Book Now"}>
          <Card className={"min-w-[350px] p-5"}>
            <div className="flex flex-col">
              <h2 className="pb-2 text-4xl font-bold">
                We&apos;re Ready, Let&apos;s Talk.
              </h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <input
                    className="mb-5 w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    type="text"
                    placeholder="First Name"
                    name="first"
                    id="first"
                    required
                  />
                  <input
                    className="mb-5 w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    type="text"
                    placeholder="Last Name"
                    name="last"
                    required
                  />
                </div>
                <div>
                  <input
                    className="mb-5 w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="mb-5 w-full rounded-md border-0 p-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"
                    type="text"
                    placeholder="Comment or Message"
                    name="message"
                    required
                  />
                </div>
                <div>
                  <Button>Submit</Button>
                </div>
              </form>
            </div>
          </Card>
          <Card className={"min-w-[350px] p-5 lg:justify-start"}>
            <div className="flex flex-col justify-center lg:w-full">
              <h2 className="pb-2 text-4xl font-bold">Contact Info</h2>
              <div className="py-5">
                <h3 className="text-lg font-bold">Address</h3>
                <p>9060 AR-70, Brinkley, AR 72021, USA</p>
              </div>
              <div className="py-5">
                <h3 className="text-lg font-bold">Email Us</h3>
                <p>knightscreekcamp@gmail.com</p>
              </div>
              <div className="py-5">
                <h3 className="text-lg font-bold">Call Us</h3>
                <p>(870) 946-5583</p>
              </div>
              <div className="py-2">
                <div className="py-5">
                  <h3 className="text-lg font-bold">Follow Us</h3>
                  <Link href={"https://www.instagram.com/knightscreek/"}>
                    <svg fill="currentColor" className="h-6 w-6">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="py-3"></div>
            </div>
          </Card>
        </Grid>
        <Footer />
      </main>
    </>
  );
}
