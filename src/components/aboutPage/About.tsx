import { useFeedBack } from "@/context/FeedbackDialogContex";
import Button from "../ui/Button";

const About = () => {
  const { setOpen } = useFeedBack();
  const handleFeedback = () => setOpen(true);
  const handleClick = () => {
    window.open("https://betterhistory.io/our-products/");
  };
  return (
    <article className='mt-6 h-full overflow-y-auto no-scrollbar'>
      <h1 className='text-xl mb-5 font-bold'>About BetterHistory</h1>
      <p className='text-sm'>
        <b>BetterHistory</b> is an innovative browser extension developed by
        BetterLogic Ltd. It empowers users to manage their browsing history with
        ease, offering advanced features like custom deletion, precise filters,
        and an intuitive interface. At BetterLogic Ltd, we prioritize user
        privacy and seamless functionality to enhance your browsing experience.
      </p>
      <Button className='mt-5' onClick={handleClick}>
        Explore Our Products
      </Button>
      <hr className='my-10' />
      <h2 className='text-xl mb-5 font-bold'>Contact and Feedback</h2>
      <p className='text-sm mb-2.5'>
        We value your input and are here to assist you!
      </p>
      <ul className='text-sm mb-2.5 list-disc'>
        <li className='mb-2.5 ml-[18px]'>
          <b> Support Articles:</b> Browse our support guides and FAQs at
          <a
            href='https://betterhistory.io/support/'
            className='font-semibold text-brand hover:underline ml-1'
          >
            BetterHistory Support
          </a>
        </li>
        <li className='mb-2.5 ml-[18px]'>
          <b>Email Support:</b> For any questions or issues, reach out to us at
          📧{" "}
          <a
            href='mailto:support@betterhistory.io'
            className='font-semibold text-brand hover:underline'
          >
            support@betterhistory.io
          </a>
        </li>
        <li className='mb-2.5 ml-[18px]'>
          <b> Feedback Form:</b>{" "}
          <button
            onClick={handleFeedback}
            className='font-semibold text-brand cursor-pointer hover:underline'
          >
            Click here to submit your feedback
          </button>
        </li>
      </ul>
      <p className='text-sm mb-2.5 mt-6 '>
        Your suggestions and feedback help us improve BetterHistory and deliver
        the best user experience.
      </p>
      <p className='text-sm'>Let me know if you need additional adjustments.</p>
      <hr className='my-10' />
      <h3 className='text-xl mb-5 font-bold'>
        Privacy & Terms: Understand Your Rights
      </h3>
      <ul className='text-sm mb-10  list-disc'>
        <li className='mb-2.5 ml-[18px]'>
          <b>Privacy Policy:</b>{" "}
          <a
            href='https://betterhistory.io/privacy/'
            className='font-semibold text-brand cursor-pointer hover:underline'
          >
            View Here
          </a>
        </li>
        <li className=' ml-[18px]'>
          <b>Terms of Service:</b>{" "}
          <a
            href='https://betterhistory.io/terms/'
            className='font-semibold text-brand cursor-pointer hover:underline'
          >
            View Here
          </a>
        </li>
      </ul>
    </article>
  );
};

export default About;
