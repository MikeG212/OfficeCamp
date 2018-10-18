class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :list_id, null: false
      t.integer :user_id, null: false
      t.boolean :completed, null: false
      t.timestamps null: false
    end

    add_index :todos, :list_id
    add_index :todos, :user_id
  end
end
