/* eslint-disable react/prop-types */
function Comment({comment}) {
    return (
        <div className="inline-flex w-full py-2 gap-2">
        <div className="rounded-full w-8 h-8 flex-shrink-0 bg-green-600 inline-flex items-center justify-center">
            {comment.username.charAt(0).toUpperCase()}
        </div>
            <div className="bg-green-500 w-full rounded-tr rounded-b px-3 py-2">
                <p className="font-medium text-sm">
                    {comment.username}
                </p>
                <p>
                    {comment.comment}
                </p>
            </div>
        </div>
    )
}

export default Comment;