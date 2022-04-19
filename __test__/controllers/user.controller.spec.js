import userMock from '../mocks/users.mock';

import { userHandlers } from '../../server/controllers/user.controller';

describe('user module testing', () => {
    it('1.- Get all users test', async () => {
        const baseUrlMock = 'www.testlink.com';
        const axiosService = {
            get: jest.fn().mockResolvedValue({ data: 1 }),
        };

        const expected = { data: 1 };
        const result = await userHandlers(axiosService).getUser(
            baseUrlMock,
            ''
        );

        expect(result).toEqual(expected);
    });
});
