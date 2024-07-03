import { useParams } from "react-router-dom";
import { InfoText } from "shared/ui";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";

const SuccessOrder = () => {
    const { t } = useTranslation("thanks");

    const { id } = useParams();

    const name = useAppSelector(authSlice.selectors.name);

    return (
        <>
            <InfoText>
                {name}
                ,
                {t("спасибо за заказ")}
            </InfoText>
            <InfoText>
                {t("Ваш заказ")}
                {" "}
                #
                {id}
                {" "}
                {t("успешно оформлен")}
            </InfoText>
        </>
    );
};

export default SuccessOrder;
