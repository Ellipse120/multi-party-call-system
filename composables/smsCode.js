import { useField } from "vee-validate";

export const useSmsCode = () => {
  const [sent, toggleSend] = useToggle();
  const SEND_GAP = 60; // 60s
  const remainSeconds = ref(SEND_GAP);

  const smsCode = useField("smsCode");
  const phone = useField("phone");

  const { pause, resume, isActive } = useIntervalFn(() => {
    remainSeconds.value -= 1;

    if (remainSeconds.value < 0) {
      pause();
      remainSeconds.value = SEND_GAP;
      toggleSend();
    }
  }, 1000);
  pause();

  const doSendSMSCode = () => {
    toggleSend();
    resume();
  };

  return {
    remainSeconds,
    smsCode,
    phone,
    sent,
    toggleSend,
    pause,
    resume,
    isActive,
    doSendSMSCode,
  };
};
