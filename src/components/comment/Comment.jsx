import { Button } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/MyContext';

function Comment({ addComment, commentText, setcommentText, allComment, fullName, setFullName }) {
  const context = useContext(myContext);
  const { mode } = context;

  console.log(allComment)
  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-3xl font-bold" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
            Make Comment
          </h2>
        </div>
        {/* Comment Form  */}
        <form className="mb-8">
          {/* Full Name Input  */}
          <div
            className="py-3 px-4 mb-4 rounded-lg shadow-md border border-gray-300"
            style={{
              background: mode === 'dark' ? '#2f3640' : 'white',
              color: mode === 'dark' ? 'white' : 'black'
            }}>
            <input
              type='text'
              placeholder='Enter Full Name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full text-sm border-0 focus:ring-0 focus:outline-none"
              style={{
                background: mode === 'dark' ? '#2f3640' : 'white',
                color: mode === 'dark' ? 'white' : 'black'
              }}
            />
          </div>

          {/* Text Area  */}
          <div
            className="py-3 px-4 mb-4 rounded-lg shadow-md border border-gray-300"
            style={{
              background: mode === 'dark' ? '#2f3640' : 'white',
              color: mode === 'dark' ? 'white' : 'black'
            }}
          >
            <label htmlFor="comment" className="sr-only">Your comment</label>
            <textarea
              id="comment"
              rows={6}
              value={commentText}
              onChange={(e) => setcommentText(e.target.value)}
              className="w-full text-sm border-0 focus:ring-0 focus:outline-none"
              style={{
                background: mode === 'dark' ? '#2f3640' : 'white',
                color: mode === 'dark' ? 'white' : 'black'
              }}
              placeholder="Write a comment..."
              required
            />
          </div>
          {/* Button  */}
          <div className="flex justify-end">
            <Button 
            onClick={addComment}
            className="px-4 py-2 rounded-lg shadow-md"
            style={{
              background: mode === 'dark' ? 'rgb(30, 41, 59)' : 'rgb(226, 232, 240)',
              color: mode === 'dark' ? 'white' : 'rgb(30, 41, 59)'
            }}
            >
              Post comment
            </Button>
          </div>
        </form>

        {/* Bottom Item  */}
        <div className="space-y-6">
          {allComment.map((item, index) => {
            const { fullName, date, commentText } = item
            return (
              <article key={index} className="p-6 rounded-lg shadow-md" style={{ background: mode === 'dark' ? '#2f3640' : 'white' }}>
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="text-lg font-bold mr-3" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                      {fullName}
                    </p>
                    <p className="text-sm text-gray-500" style={{ color: mode === 'dark' ? 'gray' : 'black' }}>
                      {date}
                    </p>
                  </div>
                </footer>
                <p className="text-md" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                  ↳ {commentText}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Comment
