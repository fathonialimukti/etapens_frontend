import { UserIcon } from '../icons';
import { darkTheme } from 'theme';
import { useSession, signIn, signOut } from "next-auth/react"
import { Dropdown, User, keyframes, Button, Link } from "@nextui-org/react";

export default function Components() {
    const { data: session } = useSession()

    const pulse = keyframes({
        '0%': {
            transform: 'scale(1)'
        },
        '50%': {
            transform: 'scale(1.2)'
        },
        '100%': {
            transform: 'scale(1)'
        }
    });

    if (session) {
        return (
            <>
            <Dropdown>
                <Dropdown.Trigger>
                    <User
                    bordered
                    as="button"
                    size="lg"
                    name={session?.user?.name}
                    description={session?.user?.email || ''}
                    src={session?.user?.image || ''}
                    />
                </Dropdown.Trigger>
                <Dropdown.Menu color="primary" aria-label="User Actions">
                    <Dropdown.Item key="dashboard">
                        <Link href='/user'>Dashboard</Link>
                    </Dropdown.Item>
                    <Dropdown.Item  key="logout" color="error"> {/* onAction={()=>signOut()} */}
                        <p onClick={()=>signOut()}>Logout</p>
                        </Dropdown.Item>
                    <Dropdown.Item key="help" withDivider>
                        Help
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </>
        );
    }
    return (
        <Button
            onPress={() => signIn()}
            rel="noreferrer"
            icon={
                <UserIcon fill="currentColor" />
            }
            css={{
                bg: '$gray50',
                color: '$text',
                maxH: '38px',
                px: '$8',
                '& .nextui-button-icon': {
                mr: '$2'
                },
                '& .nextui-button-icon svg': {
                transition: '$default'
                },
                '&:hover': {
                '& .nextui-button-icon svg': {
                    animation: `${pulse} 1s infinite`
                }
                },
                [`.${darkTheme} &`]: {
                bg: 'rgba(51, 51,51,0.7)',
                '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))':
                    {
                    bf: 'saturate(180%) blur(14px)'
                    }
                }
            }}
            >
            Login
            </Button>
    );
}

