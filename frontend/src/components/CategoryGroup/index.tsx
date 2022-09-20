import React, { ReactNode } from "react";
import { CategoryGroupContainer } from "./styles";

interface CategoryGroupProps {
  title: string;
  children: ReactNode;
}

export function CategoryGroup({ title, children }: CategoryGroupProps) {
	return (
		<CategoryGroupContainer>
			<h1>{title}</h1>
			<div>
				{children}
			</div>
		</CategoryGroupContainer>
	);
}