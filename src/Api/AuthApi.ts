import { ajax } from 'rxjs/ajax';

const signIn = (email: string, password: string) => ajax.get(`https://api.github.com/users/${email}`);

export default { signIn };
