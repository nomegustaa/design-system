import { User } from 'phosphor-react';
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles';
import { ComponentProps } from 'react';

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export const Avatar = (props: AvatarProps) => {
  return (
    <AvatarContainer>
      {props.src ? (
        <AvatarImage {...props} />
      ) : (
        <AvatarFallback>
          <User />
        </AvatarFallback>
      )}
    </AvatarContainer>
  );
};
