import moxios from 'moxios';
import NasaAPI from './NasaAPI';

describe('return success value', () => {
    beforeEach(() => {
        moxios.install();
    });
  
    afterEach(() => {
      moxios.uninstall();
    })

    test("send request without a date", () => {
        const msg = {'msg': 'nasa'};
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: msg,
          })
        })
        
        NasaAPI.getAPOD()
        .then((res) => {
          expect(res).toBe(msg);
        })
    })

    test("send request with date", () => {
        const msg = {'msg': 'nasa'};

        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: msg,
          })
        })
        
        NasaAPI.getAPOD('2020-12-10')
        .then((res) => {
          expect(res).toBe(msg);
        })
    })
})

describe('return error value', () => {
    beforeEach(() => {
        moxios.install();
    });
  
    afterEach(() => {
      moxios.uninstall();
    })

    test("returns error", () => {
        const errResp = {
            status: 400,
            response: { error: 'invalid data' },
          };

          // moxios.wait(() => {
          //   const request = moxios.requests.mostRecent();
          //   request.stubRequest(errResp);
          // });

          // NasaAPI.getAPOD().catch((err) => {
          //   expect(err).toBe({ error: 'invalid data' });
          // });
    })

})