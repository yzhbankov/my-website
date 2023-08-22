import { ReadBookmark, CreateBookmark, DeleteBookmark, UpdateBookmark } from '../usecases/index.js';

export default async function controller(method, event) {
    switch (method) {
        case 'GET': {
            return Controller.get(event);
        }
        case 'POST': {
            return Controller.post(event);
        }
        case 'PUT': {
            return Controller.put(event);
        }
        case 'DELETE': {
            return Controller.del(event);
        }
        default: {
            return {
                statusCode: 404,
                body: JSON.stringify({}),
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
    }
}

class Controller {
    static async get(event) {
        return makeRequestHandler(ReadBookmark, event)
    }
    static async post(event) {
        return makeRequestHandler(CreateBookmark, event)
    }
    static async put(event) {
        return makeRequestHandler(UpdateBookmark, event)
    }
    static async del(event) {
        return makeRequestHandler(DeleteBookmark, event)
    }
}

async function runUseCase(UseCase, { params }) {
    // todo: implement validation execution
    return new UseCase().execute(params);
}

async function makeRequestHandler(UseCase, params) {
    function logRequest(params, result, startTime) {
        console.log({
            useCase: UseCase.name,
            runtime: Date.now() - startTime,
            params,
            result,
        });
    }

    try {
        const startTime = Date.now();
        const result = await runUseCase(UseCase, { params });
        logRequest(params, result, startTime);

        return {
            statusCode: 200,
            body: JSON.stringify(result),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (err) {
        // todo: handle http errors
        console.error(`[ErrorHandler] ${err}`);
        return err;
    }
}