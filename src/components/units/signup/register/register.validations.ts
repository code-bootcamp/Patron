import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required('닉네임을 입력해주세요'),
  email: yup.string().required('이메일을 입력해주세요').email('올바른 이메일을 입력해주세요'),
  password: yup
    .string()
    .required('비밀번호를 입력해주세요')
    .min(4, '적어도 4자 이상이여야합니다')
    .max(20, '20자 이하이여야 합니다'),
  confirmPassword: yup
    .string()
    .required('비밀번호를 다시 입력해주세요')
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지않습니다'),
});
