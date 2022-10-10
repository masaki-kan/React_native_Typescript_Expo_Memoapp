import { format } from 'date-fns';
/* eslint-disable-next-line */
export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

export function transErrorCode(code) {
  const error = { title: 'エラー', description: '時間を置いてお試しください。' };

  switch (code) {
    case 'auth/invalid-email':
      error.title = 'メールアドレス';
      error.description = 'メールアドレスが不正です。';
      break;
    case 'auth/email-already-in-use':
      error.title = 'メールアドレス';
      error.description = 'メールアドレスは既に登録されています。';
      break;
    case 'auth/operation-not-allowed':
      error.description = '開発者にお問合せください。';
      break;
    case 'auth/weak-password':
      error.title = 'パスワード';
      error.description = 'パスワードが簡単すぎます。';
      break;
    case 'auth/wrong-password':
      error.title = 'パスワード';
      error.description = 'パスワードが間違っています。';
      break;
    case 'auth/user-disabled':
      error.description = 'アカウントが不正です。';
      break;
    case 'auth/user-not-found':
      error.description = 'アカウントが存在しません。';
      break;
    default:
      error.description = '時間を置いてお試しください。';
  }
}
