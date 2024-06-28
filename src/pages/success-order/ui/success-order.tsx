import { useParams } from "react-router-dom";
import { InfoText } from "shared/ui";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "app/redux/store.ts";
import { authSlice } from "entities/auth";

const SuccessOrder = () => {
    const { t } = useTranslation();

    const { id } = useParams();

    const name = useAppSelector(authSlice.selectors.name);

    return (
        <>
            <InfoText>
                {name}
                ,
                {t("successOrder.thanks")}
            </InfoText>
            <InfoText>
                {t("successOrder.order.first")}
                {" "}
                #
                {id}
                {" "}
                {t("successOrder.order.second")}
            </InfoText>
        </>
    );
};

export default SuccessOrder;
