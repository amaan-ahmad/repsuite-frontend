import Comment from "./Comment";

export default function CommentWithPost() {
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg w-full p-4 mb-2">
        <div class="rounded-xl w-full flex flex-col  p-4 bg-white dark:bg-gray-800 relative overflow-hidden ">
          <div class="w-full h-full block">
            <div class="w-full flex flex-row items-center">
              <div class="block relative">
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                  class="mx-auto object-cover rounded-full h-10 w-10 "
                />
              </div>
              <div class="flex flex-col items-start ml-2">
                <span class="dark:text-white font-bold text-lg text-blue-800">
                  Rachana Lanade
                </span>
                <span class="text-gray-400 text-sm dark:text-gray-300">
                  12:11 PM, Today
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-gray-600">
            <p>
              I used to think that when I added stuff to my brain I’d get
              smarter. But this is not true. For instance, if I look up when
              Charlemagne was born I’d just add a fact to my head that I will
              forget tomorrow but will clutter my subconscious mind. This won’t
              make me smarter. Subtraction, and not addition, is what makes the
              window to the brain more clear, wipes away the smudges, and opens
              the drapes. – James Altucher
            </p>
            <img
              alt="post"
              className="rounded-xl my-4"
              src="https://images.unsplash.com/photo-1512566972442-627949dc9aae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            />
          </div>
          <Comment
            author="Amaan Ahmad"
            imgProfile="https://pbs.twimg.com/profile_images/1308664364489216000/3tIxdlCz_400x400.jpg"
            timeString="2:14 PM, Today"
            modView={true}
          >
            When taking a content-first approach, our job as marketers is not to
            create more content … it’s to create the minimum amount of content
            with the maximum amount of results. — Robert Rose
          </Comment>
        </div>
      </div>
    </>
  );
}
