import { useState, useMemo } from 'react';
import { Card, Input, Spacer, Dropdown, Button } from '@nextui-org/react'
import { darkTheme, lightTheme } from 'theme';

export default function Components({ query, setQuery }) {
    const [selected, setSelected] = useState(new Set());
    const [title, setTitle] = useState<string>('');

    const selectedValue = useMemo(
        () => Array.from(selected).join(","),
        [selected]
    );

    const submitSearch = () => {
        console.log(title);
        setQuery({page: 1, title: title, tech: selectedValue})
    }

    return (
        <Card
            isHoverable
            css={{
                [`.${darkTheme} &`]: {
                    background: 'transparent',
                    '&:hover': {
                        shadow: "0 0 20px " + darkTheme.colors.shadow,
                    },
                },
                [`.${lightTheme} &`]: {
                    '&:hover': {
                        shadow: "0 0 10px " + lightTheme.colors.shadow,
                    },
                },
                zIndex: '$2',
                position: 'sticky',
                top: '80px',
                height: "400px",
                // maxWidth: "300px",
                minWidth: "200px",
            }}
            variant="bordered"
        >
            <Card.Body>
                <Spacer y={1} />
                <Input clearable onChange={e=>setTitle(e.target.value)} labelPlaceholder="Search by Title" initialValue={title} />
                
                <Spacer y={1} />
                <Dropdown>
                    <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
                        {selected.size != 0 ? selectedValue : 'Tech list'}
                    </Dropdown.Button>
                    <Dropdown.Menu
                        aria-label="Multiple selection actions"
                        color="secondary"
                        selectionMode="multiple"
                        selectedKeys={selected}
                        onSelectionChange={setSelected}
                    >
                        <Dropdown.Item key="php">php</Dropdown.Item>
                        <Dropdown.Item key="laravel">laravel</Dropdown.Item>
                        <Dropdown.Item key="mysql">mysql</Dropdown.Item>
                        <Dropdown.Item key="mongodb">mongodb</Dropdown.Item>
                        <Dropdown.Item key="flutter">flutter</Dropdown.Item>
                        <Dropdown.Item key="firebase">firebase</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Spacer y={1} />
                <Button onPress={submitSearch}>Submit</Button>
            </Card.Body>
        </Card>
    );
}