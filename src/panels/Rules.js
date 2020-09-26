
import React from 'react';
import PropTypes from 'prop-types';

import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Text from '@vkontakte/vkui/dist/components/Typography/Text/Text'

import PanelHeaderButton from '@vkontakte/vkui/dist/components/PanelHeaderButton/PanelHeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osName = platform();

const Rules = props => (
	<Panel id={props.id}>
		<PanelHeader left={<PanelHeaderButton onClick={props.go} data-to="record">
        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
        </PanelHeaderButton>}>
			Правила
		</PanelHeader>
		<Div>
            <Text weight="regular" style={{ marginBottom: 16 }}>
                1) Стирка может состояться только строго в период, соответствующий записи, во избежание преждевременного износа машин. Во время стирки разрешен единоразовый запуск машинки (стирать два и более раз по 30 минут НЕЛЬЗЯ)
            </Text>
            <Text weight="regular" style={{ marginBottom: 16 }}>
                2) Для максимально эффективного использования времени и ресурса машинки, загружать от 1 до 3 кг. белья.
            </Text>
            <Text weight="regular" style={{ marginBottom: 16 }}>
                3) Перед стиркой не забудьте проверить карманы на наличие посторонних предметов.
            </Text>
            <Text weight="regular" style={{ marginBottom: 16 }}>
            6. Если вам кажется, что с работой машинки что-то не так, сообщите студсовету.
            </Text>
            <Text weight="regular" style={{ marginBottom: 16 }}>
            7. Запрещено пропускать стирки в связи с большим потоком желающих воспользоваться стиральной машинкой. Пропуск двух стирок позволяет студсовету запретить вам пользоваться прачечной.
            </Text>
            <Text weight="regular" style={{ marginBottom: 16 }}>
            8. Запасные ключи делать не стоит, вы всё равно проколитесь, достаточно придерживаться распорядка.
            </Text>
            <Text weight="regular" style={{ marginBottom: 16 }}>
            9. Стирайте только вещи, которые действительно требуют машинной стирки (куртки, свитера, футболки, джинсы). Не нужно бездумно эксплуатировать машины, мелочи(белью, носкам) предназначена ручная стирка.
            </Text>
            <Text weight="regular" style={{ marginBottom: 16 }}>
            10. ПОМНИТЕ, что машина общая, нагрузка большая, поломка чревата долгосрочным простоем, либо закрытием прачечной на совсем.
            </Text>
        </Div>
	</Panel>
);

Rules.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Rules;
