// import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
// import { icon } from '@fortawesome/fontawesome-svg-core';


// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fad } from "@fortawesome/pro-duotone-svg-icons";
// import { fas } from "@fortawesome/pro-solid-svg-icons";

// library.add(fad);
// library.add(fas);

// type Props = {
// 	name: IconName,
//     prefix?: IconPrefix,
//     className?: string
// };

// const Icon = ({ name, prefix = 'fad', className }: Props) => {
//     let formattedName = name.replace('fa-', '');
    
// 	const iconHTML = icon({ prefix, iconName: formattedName as any }).html;
    
//     return (
//     	<span dangerouslySetInnerHTML={{ __html: iconHTML[0] }} className={className}/>
//     );
// };

// export default Icon;