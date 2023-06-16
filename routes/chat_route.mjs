import { Router} from 'express';
import {startConversation} from'../controllers/chat_controller.mjs'

const route = Router() 

route.post('/chat', startConversation )

export default route