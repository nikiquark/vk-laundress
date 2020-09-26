
import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import Button from '@vkontakte/vkui/dist/components/Button/Button'
import Div from '@vkontakte/vkui/dist/components/Div/Div'
import Group from '@vkontakte/vkui/dist/components/Group/Group'
import Header from '@vkontakte/vkui/dist/components/Header/Header'
import SimpleCell from '@vkontakte/vkui/dist/components/SimpleCell/SimpleCell'
import InfoRow from '@vkontakte/vkui/dist/components/InfoRow/InfoRow'
//const osName = platform();
import './main.css';

const Default = props => (
	<Panel id={props.id}>
		<PanelHeader>
			Главная
		</PanelHeader>
        <Group>
            <Header mode="secondary">Моя запись</Header>
            <SimpleCell multiline>
                
                    У вас нет активной записи.
            
            </SimpleCell>
        </Group>
		
        <Div>
			<Button stretched mode="primary" size="l" onClick={props.go} data-to="record">
			Записаться
			</Button>
		</Div>
		<Div>
			<Button stretched mode="secondary" size="l" onClick={props.go} data-to="info">
			Профиль
			</Button>
		</Div>
	</Panel>
);

Default.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Default;
