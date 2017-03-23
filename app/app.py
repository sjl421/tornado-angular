from tornado import web, ioloop
import json
import os


WORKING_DIR = os.path.dirname(os.path.realpath(__file__))
SITE_PATH = WORKING_DIR + '/public'


class ApiHandler(web.RequestHandler):

    @web.asynchronous
    def post(self, *args):
        print(self.request.body)

        self.write(json.dumps({'hello':'from backend!'}))
        
        # # finish this response
        self.finish()

app = web.Application([
    (r'/api/demo', ApiHandler),
    (r'/(.*)', web.StaticFileHandler, {"path": SITE_PATH, "default_filename":
        "index.html"})
    ])

if __name__ == '__main__':
    print('server listening on port 3000')
    app.listen(3000)
    ioloop.IOLoop.current().start()
