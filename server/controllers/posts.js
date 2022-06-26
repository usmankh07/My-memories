import PostMessage from "../models/postMessage.js"



        // We are making a get post here, it is usually to see what we have in our database and show 
        // it in the frontend sections. 


        export const getPosts = async (req, res) => {
            try {
                const postMessages = await PostMessage.find();

                res.status(200).json(postMessages)

            } catch (error) {
                res.status(400).json({ message: error.message })

            }
        }


        // We are making a post here which will make a post in our database. 

            export const createPost = async (req, res) => {
                const post = req.body;
                const newPost = new PostMessage(post);
                    try {
                        await newPost.save();

                        res.status(201).json(newPost)

                    } catch(error) {
                        res.status(409).json( { message: error.message})
                    }
            }