import Navbar from "../components/Navbar";
import ChannelsAndStatus from "../components/Dashboard/ChannelsAndStatus";
import Comment from "../components/Dashboard/Comment";
import PlanUsage from "../components/Dashboard/PlanUsage";
import CommentWithPost from "../components/Dashboard/CommentWithPost";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen  bg-blue-50">
        <Navbar />
        <main className="flex flex-col md:flex-row lg:mx-10 mt-4">
          <section className="flex flex-col max-w-80 p-4">
            <ChannelsAndStatus />
            <PlanUsage />
          </section>
          <section className="flex flex-col lg:flex-row-reverse flex-1 p-4">
            <div className="flex-1 lg:px-4">
              <CommentWithPost />
            </div>
            <div className="flex-1">
              <Comment
                author="Amaan Ahmad"
                imgProfile="https://pbs.twimg.com/profile_images/1308664364489216000/3tIxdlCz_400x400.jpg"
                timeString="2:14 PM, Today"
              >
                When taking a content-first approach, our job as marketers is
                not to create more content … it’s to create the minimum amount
                of content with the maximum amount of results. — Robert Rose
              </Comment>
              <Comment
                author="John Doe"
                imgProfile="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8YXZhdGFyfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080"
                timeString="1:34 PM, Today"
              >
                The essence of strategy is choosing what not to do. – Michael
                Porter
              </Comment>
              <Comment
                author="Jennifer"
                imgProfile="https://image.freepik.com/free-photo/portrait-young-woman-red-summer-dress-with-red-lips-chatting-by-mobile-phone-isolated-orange-wall-wall-online-orders-purchases-shopping-credit-concept_101969-1040.jpg"
                timeString="1:04 PM, Today"
              >
                Another plate wouldn’t have brought me any greater satisfaction,
                because contentment doesn’t double by the serving. – Andie
                Mitchell
              </Comment>
              <Comment
                author="Sophia"
                imgProfile="https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                timeString="12:23 PM, Today"
              >
                As the founder of this very important life of yours, you must
                decide to do less, to do your most important things. – John
                Jantsch
              </Comment>
              <Comment
                author="Michael W."
                imgProfile="https://images.unsplash.com/photo-1596747705898-a152d5d3fb2d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyMDEzNTIwfHxlbnwwfHx8&w=1000&q=80"
                timeString="12:20 PM, Today"
              >
                When you feel the need to apologize or explain who you are, it
                means the voice in your head is telling you the wrong story.
                Wipe the slate clean. And rewrite it. No fairy tales. – Shonda
                Rhimes
              </Comment>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
