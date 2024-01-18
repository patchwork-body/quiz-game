import { users } from './schema';
import { db } from './services/db';
import { auth } from './services/lucia';

const TEST_EMAIL = 'test@mail.com';
const TEST_PASSWORD = 'test';

const main = async () => {
  const [existingUser] = await db
    .select({
      id: users.id,
    })
    .from(users)
    .limit(1);

  if (existingUser) {
    await auth.deleteUser(existingUser.id);
  }

  await auth.createUser({
    key: {
      providerId: 'email',
      password: TEST_PASSWORD,
      providerUserId: TEST_EMAIL,
    },
    attributes: {
      email: TEST_EMAIL,
    },
  });
};

try {
  await main();
} catch (error) {
  console.log(error);
}
