export const useFormRules = () => {
  return {
    ruleRequired: (v: any) => !!v || "不能为空",
    ruleEmail: (value: any) => {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return pattern.test(value) || "邮件格式不正确";
    },
    rulePassword: (v: string) => (!!v && v.length >= 6) || "至少6个字符",
    ruleName: (v: string) => (!!v && v.length >= 2) || "至少两个字符",
  };
};
