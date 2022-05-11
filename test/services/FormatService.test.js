const FormatService = require("./../../lib/services/FormatService");

describe("test for FormatService", ()=>{
    test("for get formatted response when retrieve a mission commander Succesful ", ()=> {
        const mc = {
            id: 1,
            name: 'Carlo Gilmar',
            username: 'carlogilmar',
            mainStack: 'Java',
            currentEnrollment: true,
            hasAzureCertification: true
          }
        const result = FormatService.toApiResponse(mc);
        expect(result.success).toBe(true);
        expect(result.code).toBe(0);
        expect(result.message).toBe("");
        expect(result.payload).not.toBe(null);
        expect.assertions(4);

    })
    test("for get formatted response when the record is Not Found ", ()=> {
        const mc = null;
        const result = FormatService.toApiResponse(mc);
        expect(result.success).toBe(true);
        expect(result.code).toBe(0);
        expect(result.message).toBe("");
        expect(result.payload).toBe(null);
        expect.assertions(4);

    })
    test("for get the formatted response when update but No record Found ", ()=> {
        const mc = {
            code: 'P2025',
            clientVersion: '3.14.0',
            meta: { cause: 'Record to update not found.' }
          };
        const result = FormatService.toApiResponse(mc);
        expect(result.success).toBe(false);
        expect(result.code).toBe("P2025");
        expect(result.message).toBe('Record to update not found.');
        expect.assertions();

    })
});