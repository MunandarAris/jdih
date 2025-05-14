import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { Button, Flex, Typography } from "antd";
import { colorsTheme } from "@/constants/colors";
import { useRouter } from "next/router";
import Logo from "../../public/assets/images/logo.png";
import Image from "next/image";

const { Text, Title, Paragraph } = Typography;

const InputText = dynamic(() => import("@/components/atoms/InputText"), {
  ssr: false,
});
const CheckboxComponent = dynamic(
  () => import("@/components/atoms/CheckboxComponent"),
  { ssr: false }
);
const BaseModal = dynamic(() => import("@/components/molecules/BaseModal"), {
  ssr: false,
});

function LoginPage() {
  const router = useRouter();
  const [values, setValues] = useState({
    username: "",
    password: "",
    newPassword: "",
    confirmationPassword: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalStep, setModalStep] = useState("email");
  const [emailForgetPassword, setEmailForgetPassword] = useState("");

  const isDisabled = useMemo(() => {
    return !values?.username || !values?.password;
  }, [values]);

  const isDisabledEmailForgetPassword = useMemo(() => {
    return !emailForgetPassword;
  }, [emailForgetPassword]);

  const isDisabledForgetPassword = useMemo(() => {
    const { newPassword, confirmationPassword } = values;
    return (
      newPassword.length < 8 ||
      confirmationPassword.length < 8 ||
      newPassword !== confirmationPassword
    );
  }, [values]);

  const handleOnClick = () => {
    setIsOpenModal(true);
    setModalStep("email");
  };

  const handleOnClose = () => {
    setIsOpenModal(false);
    setModalStep("email");
    setValues({
      newPassword: "",
      confirmationPassword: "",
    });
    setEmailForgetPassword("");
  };

  const cancelButtonAttribute = {
    onClick: handleOnClose,
    label: "Batal",
  };

  const submitButtonAttribute =
    modalStep === "email"
      ? {
          onClick: () => setModalStep("newPassword"),
          label: "Selanjutnya",
          disabled: isDisabledEmailForgetPassword,
          loading: false,
        }
      : {
          onClick: handleOnClose,
          label: "Simpan",
          disabled: isDisabledForgetPassword,
          loading: false,
        };

  const handleLoginSubmit = () => {
    router.push("/");
  };

  return (
    <Flex style={{ height: "100vh" }}>
      {/* Left: Login Form */}
      <Flex
        flex={1}
        align="center"
        justify="center"
        style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            width: "100%",
            maxWidth: 547,
            padding: "40px 20px",
            borderRadius: 10,
            textAlign: "left",
          }}>
          <h1
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 24,
              textAlign: "center",
            }}>
            Login
          </h1>

          <InputText
            label="Email"
            placeholder="example.email@gmail.com"
            value={values?.username}
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
          <InputText
            label="Kata Sandi"
            placeholder="Masukkan Kata Sandi minimal 8 karakter"
            type="password"
            name="password"
            value={values?.password}
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />

          {/* Ingat Saya + Lupa Kata Sandi */}
          <Flex
            justify="space-between"
            align="center"
            style={{ marginTop: 10, marginBottom: 20, fontSize: 14 }}>
            <Flex align="center" gap={5}>
              <CheckboxComponent value={rememberMe} onChange={setRememberMe} />
              <Text>Ingat Saya</Text>
            </Flex>
            <Text
              tabIndex={0}
              role="button"
              onClick={handleOnClick}
              style={{ color: colorsTheme?.secondary, cursor: "pointer" }}>
              Lupa Kata Sandi
            </Text>
          </Flex>

          {/* Button Login */}
          <Button
            type="primary"
            block
            style={{
              backgroundColor: colorsTheme?.secondary,
              borderColor: colorsTheme?.secondary,
              fontSize: 16,
              height: 40,
            }}
            disabled={isDisabled}
            onClick={handleLoginSubmit}>
            Masuk
          </Button>
        </div>
      </Flex>

      {/* Right: Background and Text */}
      <Flex
        flex={1}
        vertical
        align="center"
        justify="center"
        style={{
          backgroundImage: `url('/assets/images/background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "#fff",
          padding: 20,
          textAlign: "center",
        }}>
        <Image
          src={Logo}
          alt="Logo"
          width={163}
          height={153}
          style={{ marginBottom: 20 }}
        />
        <Title level={3} style={{ marginBottom: 8, color: "#fff" }}>
          JDIH POLRI
        </Title>
        <Paragraph
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#fff",
            marginBottom: 0,
          }}>
          (Jaringan Dokumentasi dan Informasi Hukum <br />
          Kepolisian Republik Indonesia)
        </Paragraph>
      </Flex>

      {/* Single BaseModal for Forgot Password */}
      <BaseModal
        title={<div style={{ textAlign: "center" }}>Lupa Kata Sandi</div>}
        open={isOpenModal}
        onClose={handleOnClose}
        cancelButtonAttribute={cancelButtonAttribute}
        submitButtonAttribute={submitButtonAttribute}>
        {modalStep === "email" ? (
          <>
            <p style={{ textAlign: "center" }}>
              Masukkan alamat email yang terkait dengan akun Anda
            </p>
            <InputText
              value={emailForgetPassword}
              label="Email"
              placeholder="example.email@gmail.com"
              onChange={(e) => setEmailForgetPassword(e.target.value)}
            />
          </>
        ) : (
          <>
            <p style={{ textAlign: "center" }}>
              Masukkan kata sandi baru untuk akun Anda
            </p>
            <InputText
              value={values.newPassword}
              label="Kata Sandi Baru"
              placeholder="Masukkan kata sandi minimal 8 karakter"
              onChange={(e) =>
                setValues({
                  ...values,
                  newPassword: e.target.value,
                })
              }
            />
            <InputText
              value={values.confirmationPassword}
              label="Konfirmasi Kata Sandi"
              placeholder="Masukkan kata sandi minimal 8 karakter"
              onChange={(e) =>
                setValues({
                  ...values,
                  confirmationPassword: e.target.value,
                })
              }
            />
          </>
        )}
      </BaseModal>
    </Flex>
  );
}

export default LoginPage;
