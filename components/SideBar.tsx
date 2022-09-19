import {
    HomeIcon,
    HeartIcon,
    LibraryIcon,
    PlusCircleIcon,
    RssIcon,
    SearchIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';
import IconButton from './IconButton';

const Divider = () => <hr className="border-t-[0.1px] border-gray-900" />;

const SideBar = () => {
    const { data: session } = useSession();

    return (
        <div className="text-gray-500 px-5 pt-5 pb-36 text-xs lg:text-sm border-r border-gray-900 h-screen overflow-y-scroll scrollbar-hidden sm:max-w-[12rem] lg:max-w-[15rem] hidden md:block">
            <div className="space-y-4">
                {session?.user && (
                    <button onClick={() => signOut()}>{session.user.name} - Log out</button>
                )}
                <IconButton icon={HomeIcon} label="Home" />
                <IconButton icon={SearchIcon} label="Search" />
                <IconButton icon={LibraryIcon} label="Your Library" />

                <Divider />

                <IconButton icon={PlusCircleIcon} label="Create Playlist" />
                <IconButton icon={HeartIcon} label="Like Song" />
                <IconButton icon={RssIcon} label="Your Episodes" />

                <Divider />
            </div>
        </div>
    );
};

export default SideBar;
