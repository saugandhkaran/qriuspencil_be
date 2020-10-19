import { Router } from 'express';
import { getAllBlogs } from '../controllers/blogController';

const blogRouter = Router();
blogRouter.get('/', getAllBlogs);


export default blogRouter;